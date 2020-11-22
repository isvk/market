import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadParameters } from "src/store/parameters/actions";
import Alert from "src/components/Alert/Alert";

export default function LoadParameters() {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadParameters());
        // eslint-disable-next-line
    }, []);

    return <Alert type="preload" text="Загрузка..." />;
}
