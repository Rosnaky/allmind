import TabComponent from "./tab_component";

const HowItWorksTile = () => {
    return (
        <div className="font-[family-name:var(--font-satoshi)] font-medium bg-gradient-to-b from-[var(--dark-blue)] to-[var(--dark-blue-green)]">
            <div className="text-white text-3xl text-center py-12">
                How it Works
            </div>
            <TabComponent/>
        </div>
    );
}

export default HowItWorksTile;