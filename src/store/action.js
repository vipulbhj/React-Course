export const HANDLE_FORM_CHANGE = 'HANDLE_FORM_CHANGE';
export const CONTACT_COMPONENT_DID_MOUNT = 'CONTACT_COMPONENT_DID_MOUNT';
export const UPDATE_BLOG_LIST = 'UPDATE_BLOG_LIST'; 
export const DOWNLOAD_SMH = 'DOWNLOAD_SMH';
export const DOWNLOAD_BLOG_LIST = 'DOWNLOAD_BLOG_LIST';

export const handleFormChange = (key, value) => {
    return {
        type: HANDLE_FORM_CHANGE,
        payload: {key, value}
    }
}

export const contactComponentDidMount = (newFormState) => {
    return {
        type: CONTACT_COMPONENT_DID_MOUNT, 
        value: newFormState
    }
}

export const storeSMH = (data) => {
    return {
        type: DOWNLOAD_SMH,
        data: data
    }
} 

export const storeBlogList = (data) => {
    return {
        type: DOWNLOAD_BLOG_LIST,
        data: data
    }
}

export const downloadSMH = () => {
    return (dispatch) => {
        fetch('http://localhost:5000/api/social-media-handles')
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            const DATA = body.data;
            dispatch(storeSMH(DATA));
        })
        .catch((err) => {
            console.log(err);
        })
    }
}


export const downloadBlogList = () => {
    return (dispatch) => {
        fetch('http://localhost:5000/api/blogs')
        .then((res) => {
            return res.json();
        })
        .then((body) => {
            const DATA = body.data;
            dispatch(storeBlogList(DATA));
        })
        .catch((err) => {
            console.log(err);
        })
    }
}