interface IWeatherProps {
  todayWeather: string;
}

const MyWearher = ({ todayWeather }: IWeatherProps) => {
  return (
    <div className="flex flex-col items-end my-4">
      오늘의 날씨 : {todayWeather}
    </div>
  );
};

export default MyWearher;
