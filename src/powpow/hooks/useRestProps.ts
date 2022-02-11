import { useMemo } from 'react';

export default function useRestProps(props:any,deletes:string[]) {

    const _restProps = useMemo(() => {
        let _propsWithoutChildren = { ...(props) };
        for(let del of deletes){
            delete _propsWithoutChildren[del];
        }
        return _propsWithoutChildren;
    }, [props,deletes])

    return _restProps;
}