import styles from './Input.module.scss';
import React from 'react';

// TODO (amiller68): This is Janky, we should be using Types properly
// We should be able to use this in a storybook

export default class Input extends React.Component<any> {
  input: any;

  componentDidMount = () => {
    if (this.props.autoFocus) {
      this.input.focus();
    }
  };

  _handleCopy = (_: any) => {
    this.input.select();
    document.execCommand('copy');
  };

  _handleKeyUp = (e: any) => {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(e);
    }

    if ((e.which === 13 || e.keyCode === 13) && this.props.onSubmit) {
      this.props.onSubmit(e);
      return;
    }
  };

  _handleChange = (e: any) => {
    if (this.props.pattern && e.target.value) {
      if (!this.props.pattern.test(e.target.value)) {
        e.preventDefault();
        return;
      }
    }

    if (e.target.value && e.target.value.length > this.props.max) {
      e.preventDefault();
      return;
    }

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    return (
      <div className={styles.container} style={this.props.style}>
        <input
          className={styles.input}
          ref={(c) => {
            this.input = c;
          }}
          autoComplete="off"
          autoFocus={this.props.autoFocus}
          value={this.props.value}
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this._handleChange}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onKeyUp={this._handleKeyUp}
          disabled={this.props.disabled}
          readOnly={this.props.readOnly}
          style={{
            ...this.props.inputStyle,
            opacity: this.props.readOnly ? 0.5 : 1,
          }}
        />
      </div>
    );
  }
}
