import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagVenezuelaIcon = (
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
    <path fill='#CF142B' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#00207F' d='M24 5H0v6h24z' />
    <path fill='#FFCD00' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m6.592 10.424-.488.256.093-.543-.394-.384.545-.079.244-.494.243.494.545.08-.394.384.093.542M7.89 8.705l-.208.51-.278-.476-.549-.04.367-.412-.13-.535.503.222.469-.29-.055.548.42.356M9.392 7.535 9.098 8l-.19-.516-.534-.136.432-.34-.036-.55.458.305.512-.204-.15.53.352.424M11.16 6.794l-.405.373-.05-.548-.48-.269.505-.217.108-.54.363.413.547-.065-.281.474.23.5M17.409 10.424l.487.256-.093-.543.395-.384-.545-.079-.244-.494-.244.494-.545.08.395.384-.094.542M16.11 8.705l.208.51.278-.476.549-.04-.367-.412.131-.535-.504.222-.468-.29.055.548-.42.356M14.609 7.535l.293.465.191-.516.534-.136-.433-.34.036-.55-.458.305-.511-.204.149.53-.352.424M12.84 6.794l.406.373.05-.548.48-.269-.506-.217-.107-.54-.363.413-.547-.065.281.474-.23.5'
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
const ForwardRef = forwardRef(FlagVenezuelaIcon);
export default ForwardRef;
