import { majors } from "../../lib/menuset";

const MajorOpt = () => {
    return (
        <div className="flex">
            <select name="school_degree" id="school_degree" className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2 w-1/2">
                <option label="A.A">
                    A.A.
                </option>
                <option label="A.S.">
                    A.S.
                </option>
                <option label="B.A.">
                    B.A.
                </option>
                <option label="B.S.">
                    B.S.
                </option>
                <option label="M.A">
                    M.A.
                </option>
                <option label="M.S">
                    M.S.
                </option>
                <option label="Ph.D.">
                    Ph.D.
                </option>
            </select >
            <select name="school_degree" id="school_degree" className="p-2 inline-block align-middle text-sm font-medium text-blue-900 xl:bg-gray-100 border border-gray-200 rounded-md pl-2 w-1/2">
                <optgroup label="AGRICULTURE">
                    {majors.Agriculture.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="ARCHITECTURE">
                    {majors.Architecture.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="MULTIDISCIPLINARY">
                    {majors.Multidisciplinary.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="ARTS">
                    {majors.Arts.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="COMMUNICATIONS">
                    {majors.Communications.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="BUSINESS">
                    {majors.Business.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="COMMUNITY">
                    {majors.Community.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="COMPUTER">
                    {majors.Computer.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="EDUCATION">
                    {majors.Education.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="ENGINEERING">
                    {majors.Engineering.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="LANGUAGE">
                    {majors.Language.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="HEALTH">
                    {majors.HEALTH.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="PHILOSOPHY">
                    {majors.PHILOSOPHY.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="PHYSICAL">
                    {majors.PHYSICAL.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
                <optgroup label="LAW">
                    {majors.LAW.map((item, index) => {
                        return (
                            <option value={item}>{item}</option>
                        );
                    })}
                </optgroup>
            </select >
        </div>
    )
}

export default MajorOpt;