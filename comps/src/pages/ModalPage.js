import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [ showModal, setShowModal ] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={ handleClose } primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={ handleClose } actionBar={ actionBar } >
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div className="relative">
            <Button onClick={ handleClick } primary>
                Open Modal
            </Button>
            { showModal &&  modal }
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec mi ullamcorper, gravida massa a, laoreet eros. Nulla cursus vehicula consequat. Vestibulum sed ante nec metus lacinia euismod. Nulla urna massa, volutpat ac iaculis sit amet, lacinia eget dui. Fusce nec dictum erat. Nullam cursus lobortis eros sed tempor. Sed consectetur quam luctus mauris vulputate venenatis. Sed in libero lacus. Praesent mollis quis massa in maximus.
            </p>
        </div>
    );
}

export default ModalPage;
