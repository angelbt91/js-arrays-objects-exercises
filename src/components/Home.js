const Home = () => {
    return (
        <>
            <h1>JS Arrays and Objects exercises</h1>
            <p className='mt-4'>This is a series of exercises on Javascript arrays and objects.</p>
            <p>Click on any item on the left to open an exercise.</p>
            <p>Every exercise will ask you to manipulate an array or an object in a certain way to obtain an expected
                output.</p>
            <p>To solve an exercise, follow these steps:</p>
            <ol>
                <li>Click on the exercise on the left sidebar.</li>
                <li>Read the description and the expected output.</li>
                <li>Open the corresponding exercise file, under the /exercises directory.</li>
                <li>Read the instructions (lines that start with 👀) for more information on the exercise.</li>
                <li>Modify the code indicated between the emoji 📝 to return the expected output.</li>
                <li>Check on the page if your output and the expected output match. You will see a 🥳 emoji in that
                    case!
                </li>
            </ol>
            <p className='mt-5 font-italic'>Developed by <a href='https://github.com/angelbt91' target='_blank'
                                                            rel='noreferrer'>angelbt91</a> for Nuclio Digital School
                Full Stack Development Master.</p>
        </>
    );
}

export default Home;