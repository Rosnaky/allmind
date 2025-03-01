
const Headline = () => {
    return (
        <div className="flex flex-row justify-center pt-2 pb-2 bg-[var(--deep-sky-blue)] text-white">
            <div>
                Take a look at our latest blog post!
            </div>
            <a
                className="underline pl-1.5"
                href="https://www.massdriver.cloud/blogs/the-case-for-abstractions-in-iac"
                target="_blank"
                rel="nooperner noreferrer"
            >
                The Case for Abstractions in IaC
            </a>
        </div>
    );
}

export default Headline;