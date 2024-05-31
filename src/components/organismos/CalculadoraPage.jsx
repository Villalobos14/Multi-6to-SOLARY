import * as React from "react";

function MyComponent() {
    return (
        <div className="flex flex-col bg-black">
            <div className="flex gap-5 justify-between px-14 py-6 w-full bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="justify-center my-auto text-2xl font-semibold leading-6 text-white whitespace-nowrap">
                    SOLARY
                </div>
                <div className="flex gap-5 justify-between text-lg leading-8">
                    <button className="justify-center px-8 py-2 bg-black border-2 text-white border-white border-solid rounded-full max-md:px-5">
                        Login
                    </button>
                    <button className="justify-center px-8 py-2whitespace-nowrap text-white bg-black border-2 border-white border-solid rounded-full max-md:px-5">
                        Register
                    </button>
                </div>
            </div>
            <div className="justify-center px-20 py-20 w-full bg-black max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto text-lg text-white max-md:mt-10 max-md:max-w-full">
                            <div className="text-6xl font-semibold leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                                Solary best proyect for innovation
                            </div>
                            <div className="mt-11 leading-8 max-md:mt-10 max-md:max-w-full">
                                This is the inicial call to action for the application
                                and the process of desingn
                            </div>
                            <div className="flex flex-col justify-center mt-20 max-w-full text-center  rounded-2xl leading-[178%] text-zinc-800 w-[175px] max-md:mt-10">
                                <button className="justify-center px-8 py-2 bg-black border-2 text-white border-white border-solid rounded-full max-md:px-5">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8be0ef4a2b5f0a812ccd703d7dd97f83bb13aaa2ea074f4a45d7b0a300df98bc?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8be0ef4a2b5f0a812ccd703d7dd97f83bb13aaa2ea074f4a45d7b0a300df98bc?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8be0ef4a2b5f0a812ccd703d7dd97f83bb13aaa2ea074f4a45d7b0a300df98bc?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8be0ef4a2b5f0a812ccd703d7dd97f83bb13aaa2ea074f4a45d7b0a300df98bc?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8be0ef4a2b5f0a812ccd703d7dd97f83bb13aaa2ea074f4a45d7b0a300df98bc?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8be0ef4a2b5f0a812ccd703d7dd97f83bb13aaa2ea074f4a45d7b0a300df98bc?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8be0ef4a2b5f0a812ccd703d7dd97f83bb13aaa2ea074f4a45d7b0a300df98bc?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8be0ef4a2b5f0a812ccd703d7dd97f83bb13aaa2ea074f4a45d7b0a300df98bc?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                            className="grow w-full aspect-[1.12] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center px-20 w-full bg-black max-md:px-5 max-md:max-w-full">
                <div className="shrink-0 max-w-full h-px bg-white rounded-[100px] w-[1080px]" />
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e915b9548b2a57686abf9ff55fcc207641835339282badd9facd34f23bea9c7d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e915b9548b2a57686abf9ff55fcc207641835339282badd9facd34f23bea9c7d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e915b9548b2a57686abf9ff55fcc207641835339282badd9facd34f23bea9c7d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e915b9548b2a57686abf9ff55fcc207641835339282badd9facd34f23bea9c7d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e915b9548b2a57686abf9ff55fcc207641835339282badd9facd34f23bea9c7d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e915b9548b2a57686abf9ff55fcc207641835339282badd9facd34f23bea9c7d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e915b9548b2a57686abf9ff55fcc207641835339282badd9facd34f23bea9c7d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e915b9548b2a57686abf9ff55fcc207641835339282badd9facd34f23bea9c7d?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                    className="mt-16 aspect-[25] max-w-[931px] w-[931px] max-md:mt-10 max-md:max-w-full"
                />
                <div className="shrink-0 mt-16 max-w-full h-px bg-white rounded-[100px] w-[1080px] max-md:mt-10" />
            </div>
            <div className="flex justify-center items-center px-16 py-20 w-full bg-black max-md:px-5 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aabfff88d378bd9cbe356ba28382b0a7d527ed05c8632450647124aee13e670d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aabfff88d378bd9cbe356ba28382b0a7d527ed05c8632450647124aee13e670d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aabfff88d378bd9cbe356ba28382b0a7d527ed05c8632450647124aee13e670d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aabfff88d378bd9cbe356ba28382b0a7d527ed05c8632450647124aee13e670d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aabfff88d378bd9cbe356ba28382b0a7d527ed05c8632450647124aee13e670d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aabfff88d378bd9cbe356ba28382b0a7d527ed05c8632450647124aee13e670d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aabfff88d378bd9cbe356ba28382b0a7d527ed05c8632450647124aee13e670d?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aabfff88d378bd9cbe356ba28382b0a7d527ed05c8632450647124aee13e670d?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                    className="my-5 w-full aspect-[2.17] max-w-[1080px] max-md:max-w-full"
                />
            </div>
            <div className="flex justify-center items-center px-16 py-12 w-full bg-black max-md:px-5 max-md:max-w-full">
                <div className="w-full max-w-[1033px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-center px-11 py-1 text-lg text-center text-white max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17ff696a5e0b6eff1cc1c33d0c03d8eacb225f9401a6b5687f7d29216bb6e446?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                    className="aspect-square w-[70px]"
                                />
                                <div className="mt-10 font-semibold leading-[178%]">
                                    Stadistics
                                </div>
                                <div className="self-stretch mt-7 leading-8">
                                    see all our features to know All
                                    the power of phyton
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-center px-11 py-1 text-lg text-center text-white max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/76a59e0eb2ef080ced0ee60ddcff10256e9570eb2613583264a722548dc721f9?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                    className="aspect-square w-[70px]"
                                />
                                <div className="mt-12 font-semibold leading-[178%] max-md:mt-10">
                                    Probability
                                </div>
                                <div className="self-stretch mt-6 leading-8">
                                    know the probability of some
                                    measures to keep you informed
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-center px-9 py-1 text-lg text-center text-white max-md:px-5 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25c8ff66e4a17e6e32cd37797e650330749f95a120d8a0aee6803f905fb00c6?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                    className="aspect-square w-[70px]"
                                />
                                <div className="mt-12 font-semibold leading-[178%] max-md:mt-10">
                                    All in one place
                                </div>
                                <div className="self-stretch mt-6 leading-8">
                                    Keep all the information in your
                                    hand and make better performances
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-8 w-full bg-black max-md:px-5 max-md:max-w-full">
                <div className="flex justify-center items-center px-16 py-20 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl max-w-[1080px] max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col mt-3 mb-1 max-w-full w-[756px]">
                        <div className="text-2xl font-semibold leading-10 text-zinc-800 max-md:max-w-full">
                            “Solary is a great product! All of my most important information
                            is there - measures, information, Stadistics, probability,
                            and more. And I don't need to worry because it's all in one place!
                            thanks!”
                        </div>
                        <div className="flex gap-5 self-start mt-14 max-md:mt-10">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5608b1f2a8bf3367de89a691ee832af3cc03ed68cc5a3171cb493fb2aa29d520?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5608b1f2a8bf3367de89a691ee832af3cc03ed68cc5a3171cb493fb2aa29d520?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5608b1f2a8bf3367de89a691ee832af3cc03ed68cc5a3171cb493fb2aa29d520?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5608b1f2a8bf3367de89a691ee832af3cc03ed68cc5a3171cb493fb2aa29d520?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5608b1f2a8bf3367de89a691ee832af3cc03ed68cc5a3171cb493fb2aa29d520?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5608b1f2a8bf3367de89a691ee832af3cc03ed68cc5a3171cb493fb2aa29d520?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5608b1f2a8bf3367de89a691ee832af3cc03ed68cc5a3171cb493fb2aa29d520?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5608b1f2a8bf3367de89a691ee832af3cc03ed68cc5a3171cb493fb2aa29d520?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                className="shrink-0 w-20 aspect-[0.96]"
                            />
                            <div className="flex flex-col my-auto">
                                <div className="text-lg leading-8 text-zinc-800">
                                    Johnny Owens
                                </div>
                                <div className="flex gap-1.5 mt-2.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/672efe22da4d16ad12b929c9c2cf725749ab72c993e54963420568c108182001?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                        className="shrink-0 w-5 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/672efe22da4d16ad12b929c9c2cf725749ab72c993e54963420568c108182001?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                        className="shrink-0 w-5 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/672efe22da4d16ad12b929c9c2cf725749ab72c993e54963420568c108182001?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                        className="shrink-0 w-5 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/672efe22da4d16ad12b929c9c2cf725749ab72c993e54963420568c108182001?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                        className="shrink-0 w-5 aspect-square"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/672efe22da4d16ad12b929c9c2cf725749ab72c993e54963420568c108182001?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                                        className="shrink-0 w-5 aspect-square"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center p-20 w-full bg-black max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto text-lg text-white max-md:mt-10">
                            <div className="text-6xl font-semibold leading-[90px] max-md:text-4xl max-md:leading-[67px]">
                                Questions? <br />
                                Let’s talk{" "}
                            </div>
                            <div className="mt-14 leading-8 max-md:mt-10">
                                Contact us through our 24/7 live chat.We’re always happy to
                                help!
                            </div>
                            <div className="flex flex-col justify-center mt-11 text-center  rounded-2xl leading-[178%] text-zinc-800 max-md:mt-10">
                                <button className="justify-center px-8 py-2 whitespace-nowrap text-black bg-white border-2 border-white border-solid rounded-full max-md:px-5">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f331e5271d84bbef367365de8aa2c84bcdbd3d089b7c5626624235a5e7759b?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f331e5271d84bbef367365de8aa2c84bcdbd3d089b7c5626624235a5e7759b?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f331e5271d84bbef367365de8aa2c84bcdbd3d089b7c5626624235a5e7759b?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f331e5271d84bbef367365de8aa2c84bcdbd3d089b7c5626624235a5e7759b?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f331e5271d84bbef367365de8aa2c84bcdbd3d089b7c5626624235a5e7759b?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f331e5271d84bbef367365de8aa2c84bcdbd3d089b7c5626624235a5e7759b?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f331e5271d84bbef367365de8aa2c84bcdbd3d089b7c5626624235a5e7759b?apiKey=3e2df49d66f0474aaecc98292f644ee5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7f331e5271d84bbef367365de8aa2c84bcdbd3d089b7c5626624235a5e7759b?apiKey=3e2df49d66f0474aaecc98292f644ee5&"
                            className="self-stretch my-auto w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-12 pb-12 w-full bg-black max-md:px-5 max-md:max-w-full">
                <div className="shrink-0 h-px bg-white rounded-[100px] max-md:max-w-full" />
                <div className="flex gap-5 items-start mt-14 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="justify-center text-2xl font-semibold leading-6 whitespace-nowrap">
                        Wallet
                    </div>
                    <div className="flex-auto mt-3.5 text-lg leading-8 max-md:max-w-full">
                        Updates right to your Inbox
                    </div>
                </div>
                <div className="flex gap-5 mt-5 w-full text-lg max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-auto gap-5 justify-between self-start mt-5 font-semibold leading-8 text-white max-md:flex-wrap">
                        <div className="flex gap-3 py-2.5 leading-[178%]">
                            <div>©</div>
                            <div className="flex-auto">Wallet 2022</div>
                        </div>
                        <div>Privacy policy</div>
                        <div>Cookies policy</div>
                        <div>Terms of use</div>
                    </div>
                    <div className="flex flex-auto gap-5 leading-[178%] max-md:flex-wrap max-md:max-w-full">
                        <input
                            type="text"
                            className="grow justify-center items-start px-8 py-5 text-white rounded-2xl bg-zinc-800 w-fit max-md:px-1"
                            placeholder="Email Address" />


                        <div className="flex flex-col justify-center text-center whitespace-nowrap transition duration-150 ease-in-out rounded-2xl text-zinc-800">
                            <button className="justify-center px-8 py-2 whitespace-nowrap bg-gradient-to-r from-green-800 to-blue-800 text-white border-2 rounded-full max-md:px-5 transform transition-transform duration-300 hover:scale-105 ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                                Send
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;