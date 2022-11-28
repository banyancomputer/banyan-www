import styles from '@components/navigation/header/Header.module.sass';
import Link from 'next/link';
import Tag from '@components/tags/Tag';
import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import useMenu from '@components/navigation/header/useMenu';

export interface IMobile extends React.ComponentPropsWithoutRef<'header'> {}

const Mobile: React.FC<IMobile> = ({ className, ...headerProps }) => {
  const menu = useMenu();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header
        {...headerProps}
        className={`w-full flex flex-row justify-between ${className}`}
      >
        <div className={styles.navigation}>
          <nav className={styles.container}>
            <div className={styles.left}>
              <button onClick={() => setOpen(true)}> Menu </button>
            </div>
            <div className={styles.center}>
              <Link href="/" style={{ textDecoration: 'none' }}>
                <span className={styles.logo}>
                  {' '}
                  Krondor <Tag>Alpha</Tag>{' '}
                </span>
              </Link>
            </div>
            <div className={styles.right}>
              <button> Connect </button>
            </div>
          </nav>
        </div>

        <Transition.Root show={open} as={React.Fragment} unmount={false}>
          <Dialog
            as="div"
            className="fixed inset-0 z-20 overflow-hidden"
            onClose={setOpen}
            unmount={false}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Transition.Child
                as={React.Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="absolute inset-0 transition-opacity bg-dark-1000 bg-opacity-80" />
              </Transition.Child>

              <div className="fixed inset-y-0 left-0 pr-10 max-w-[260px] flex">
                <Transition.Child
                  as={React.Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-[-100%]"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-[-100%]"
                  unmount={false}
                >
                  <div className="w-screen max-w-sm">
                    <div className="flex flex-col h-full py-6 overflow-x-hidden overflow-y-scroll shadow-xl bg-dark-800">
                      <nav className="flex-1 pl-6" aria-label="Sidebar">
                        {menu.map((node) => {
                          return node.title;
                        })}
                      </nav>

                      <div className="flex flex-col gap-4 px-6">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center justify-center flex-grow w-auto text-sm font-bold border-2 rounded shadow cursor-pointer pointer-events-auto select-none border-dark-800 hover:border-dark-700 bg-dark-900 whitespace-nowrap">
                            Bottom
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </header>
    </>
    // <header
    //   {...headerProps}
    //   className={`w-full flex flex-row justify-between ${className}`}
    // >
    //   <div className={styles.navigation}>
    //     <nav className={styles.container}>
    //       <div className={styles.left}>
    //         <button> menu </button>
    //       </div>
    //       <div className={styles.center}>
    //         <Link href="/" style={{ textDecoration: 'none' }}>
    //           <span className={styles.logo}>
    //             {' '}
    //             Krondor <Tag>Alpha</Tag>{' '}
    //           </span>
    //         </Link>
    //       </div>
    //       {/*TODO (amiller68): Make these point to pages*/}
    //       <div className={styles.right}>
    //         <button> Connect </button>
    //       </div>
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Mobile;
