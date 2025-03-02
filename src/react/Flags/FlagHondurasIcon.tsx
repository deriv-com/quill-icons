import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagHondurasIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#00BCE4'
      d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zM2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2'
    />
    <path
      fill='#00BCE4'
      fillRule='evenodd'
      d='m12 8.494-.488.256.093-.543-.394-.385.545-.078L12 7.25l.244.494.545.079-.395.384.093.543M7.007 6.994l-.488.256.093-.543-.394-.385.545-.078.244-.494.244.494.545.079-.395.384.093.543M7.007 9.994l-.488.256.093-.543-.394-.385.545-.078.244-.494.244.494.545.079-.395.384.093.543M16.994 9.994l-.488.256.093-.543-.394-.385.545-.078.244-.494.243.494.545.079-.395.384.093.543M16.994 6.994l-.488.256.093-.543-.394-.385.545-.078.244-.494.243.494.545.079-.395.384.093.543'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M24 5H0v6h24zM7.007 6.994l-.488.256.093-.543-.394-.385.545-.078.244-.494.244.494.545.079-.395.384.093.543zm4.506 1.756.092-.543-.394-.385.545-.078L12 7.25l.244.494.545.079-.395.384.093.543L12 8.494zm-4.9.957-.094.543.488-.256.487.256-.093-.543.395-.384-.545-.079-.244-.494-.244.494-.545.078zm9.893.543.093-.543-.394-.385.545-.078.244-.494.243.494.545.079-.395.384.093.543-.486-.256zm.093-3.543-.093.543.488-.256.486.256-.093-.543.395-.384-.545-.079-.243-.494-.244.494-.545.078z'
      clipRule='evenodd'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagHondurasIcon);
export default ForwardRef;
