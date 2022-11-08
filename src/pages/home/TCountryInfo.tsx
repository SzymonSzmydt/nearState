type DataProps = {
    continent?: string;
    country?: string;
    country_code?: string;
    political_union?: string;
    iso_code: string;

}

export function TCountryInfo({ continent, country, country_code, political_union, iso_code} : DataProps) {
    console.log(iso_code);
    
    return (
        <table>
            <thead>
                <tr className="tRow">
                    <th>Kraj</th>
                    <td> {continent} </td>
                </tr>
                <tr className="tRow">
                    <th>Kontynent</th>
                    <td> {country} </td>
                </tr>
                <tr className="tRow">
                    <th>Kod kraju</th>
                    <td className="td-upperCase">{country_code}</td>
                </tr>
                <tr className="tRow">
                    <th>Unia polityczna</th>
                    <td> {political_union} </td>
                </tr>
            </thead>
            <tbody>
                <tr className="tRow">
                    <th>kod-iso</th>
                    <td> {iso_code} </td>
                </tr>
                <tr className="tRow">
                    <th>Waluta</th>
                    <td>  </td>
                </tr>
                <tr className="tRow">
                    <th>Symbol</th>
                    <td>  </td>
                </tr>
                <tr className="tRow">
                    <th>Podjednostka</th>
                    <td>  </td>
                </tr>
            </tbody>
        </table>
    );
}