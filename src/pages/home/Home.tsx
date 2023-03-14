import { Window } from "./../../components/window/Window";
import { Map } from "./Map";
import { useDispatch, useSelector } from "react-redux";
import { getPolandAqi } from "../../contex/redux/AqicnPolandSlice";
import { region } from "../../contex/redux/PopupLogic";
import { useEffect } from "react";
import { RootState } from "../../contex/redux/store";
export function Home() {
  const isLoaded = useSelector((state: RootState) => state.poland.isLoaded);
  const dispatch = useDispatch();
  const dataFetch = async () => {
    try {
      const result = (
        await Promise.all([
          fetch(process.env.REACT_APP_katowice as string),
          fetch(process.env.REACT_APP_torun as string),
          fetch(process.env.REACT_APP_warszawa as string),
          fetch(process.env.REACT_APP_gdansk as string),
          fetch(process.env.REACT_APP_krakow as string),
          fetch(process.env.REACT_APP_lodz as string),
          fetch(process.env.REACT_APP_szczecin as string),
          fetch(process.env.REACT_APP_wroclaw as string),
        ])
      ).map((r) => r.json());
      const [
        katowice,
        torun,
        warszawa,
        gdansk,
        krakow,
        lodz,
        szczecin,
        wroclaw,
      ] = await Promise.all(result);
      const data = [
        katowice.data,
        torun.data,
        warszawa.data,
        gdansk.data,
        krakow.data,
        lodz.data,
        szczecin.data,
        wroclaw.data,
      ].sort((a, b) => b.aqi - a.aqi);
      dispatch(getPolandAqi(data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (!isLoaded) {
      dataFetch();
    }
    dispatch(region("poland"));
  }, []);
  return (
    <Window>
      <Map />
    </Window>
  );
}
