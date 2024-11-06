import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagFrenchSouthernAndAntarcticLandsIcon = (
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
    <path fill='#000089' d='M13 0h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9h13z' />
    <path fill='#fff' d='M4 0v8H0v1h13V0z' />
    <path fill='#FF002D' d='M8 0h4v8H8z' />
    <path fill='#001F9B' d='M0 8h4V0H2a2 2 0 0 0-2 2z' />
    <path
      fill='#F7FCFF'
      fillRule='evenodd'
      d='M16.558 8h4.024l-.392.752h-1.22v.404h.935l-.38.7h-.556v1.399l.915-1.44 1.182 2.048h-.483l-.169-.225h-1.07l-.753 1.39v.077l-.02-.038-.021.038v-.077l-.752-1.39h-1.07l-.17.225h-.482l1.182-2.048.914 1.44V8.751H16.95zm3.349 2.655-.263.404h.497zm-2.673 0 .263.404h-.498z'
      clipRule='evenodd'
    />
    <path
      fill='#F7FCFF'
      fillRule='evenodd'
      d='m21.393 10.012-.455.239.087-.507-.368-.358.508-.074.228-.461.227.46.51.074-.369.36.087.506M15.736 10.012l-.455.239.087-.507L15 9.386l.509-.074.227-.461.228.46.508.074-.368.36.087.506M17.01 13.609l-.456.239.087-.507-.368-.358.509-.074.227-.461.228.46.508.075-.368.359.087.506M20.12 13.609l-.456.239.087-.507-.368-.358.509-.074.227-.461.228.46.509.075-.368.359.087.506M18.563 14.804l-.455.24.087-.508-.368-.358.509-.074.227-.46.228.46.509.074-.369.359.087.506'
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
const ForwardRef = forwardRef(FlagFrenchSouthernAndAntarcticLandsIcon);
export default ForwardRef;
