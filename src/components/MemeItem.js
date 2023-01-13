

const MemeItem = (props) => {

    return (

        <div className="w-72 mb-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={props.pictureUrl} alt=""/>
            {props.title !== "" &&
                <div className="p-5">
                    <h5 className="mb-2 text-2md break-all font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                </div>
            }
        </div>


    )
}

export default MemeItem;