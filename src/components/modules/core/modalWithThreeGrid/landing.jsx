import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import ThreeGrid from './Three';

function Demo() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                // title="This is a fullscreen modal"
                fullScreen
                // size={`75%`}
                radius={0}

                h={'50px'}
                w={100}
                transitionProps={{ transition: 'pop', duration: 100 }}
            >
                <ThreeGrid />
            </Modal >

            <Button onClick={open} m={'lg'}>Open Modal</Button>
        </>
    );
}

export default Demo;