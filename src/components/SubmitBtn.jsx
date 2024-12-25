import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
            {
                isSubmitting ? <>
                    <span className="loading loading-dots text-gray-500 "></span>
                    <span className="text-gray-500">
                        Logging In...
                    </span>
                </> : text || 'submit'
            }
        </button>
    )
}

export default SubmitBtn;