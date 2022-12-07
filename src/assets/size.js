import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

export function Size() {
  const [size, setSize] = useState(Dimensions.get('screen'));
  useEffect(() => {
    Dimensions.addEventListener('change', function () {
      const width = Dimensions.get('screen').width;
      const height = Dimensions.get('screen').height;
      setSize({width: width, height: height});
    });
  }, []);

  return size;
}

export function SizeScale() {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  const [size, setSize] = useState(
    width > height
      ? {width: width / 338, height: height / 739}
      : {width: width / 739, height: height / 338},
  );

  useEffect(() => {
    Dimensions.addEventListener('change', function () {
      setSize(
        width > height
          ? {width: width / 338, height: height / 739}
          : {width: width / 739, height: height / 338},
      );
    });
  }, []);

  return size;
}
