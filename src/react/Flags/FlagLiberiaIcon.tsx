import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagLiberiaIcon = (
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
    <path fill='#fff' d='M8 0h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8h8z' />
    <path
      fill='#BF0A30'
      d='M23.924 1.453A2 2 0 0 0 22 0H8v1.453zM24 11.64H0v1.444h24zM23.925 14.544H.075A2 2 0 0 0 2 16h20a2 2 0 0 0 1.925-1.456M0 10.188h23.94v-1.46H0zM8 7.275h15.997V5.812H8zM8 4.369h15.997V2.916H8z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='m4 5.527-1.508.793.288-1.68-1.22-1.187 1.686-.245L4 1.68l.754 1.527 1.686.245-1.22 1.19.288 1.678'
      clipRule='evenodd'
    />
    <path
      fill='#002868'
      fillRule='evenodd'
      d='M8 0H2a2 2 0 0 0-2 2v6h8zM2.78 4.64l-.288 1.68L4 5.527l1.508.793-.288-1.678 1.22-1.19-1.686-.245L4 1.68l-.754 1.528-1.686.245z'
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
const ForwardRef = forwardRef(FlagLiberiaIcon);
export default ForwardRef;
