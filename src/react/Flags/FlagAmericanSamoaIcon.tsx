import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagAmericanSamoaIcon = (
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
    <path fill='#006' d='M2 0h16L0 8V2a2 2 0 0 1 2-2M18 16 0 8v6a2 2 0 0 0 2 2z' />
    <path fill='#BD1021' d='M22 16 4 8l18-8h-4L0 8l18 8z' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M22 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2L4 8zm-6.672 8.848h-1.505a.428.428 0 1 1 0-.856h.43A1.668 1.668 0 0 1 15.697 5.5l5.268-2a.428.428 0 0 1 .31.724L18.58 7.992h2.386a.428.428 0 1 1 0 .856h-1.96v.81a.43.43 0 0 1-.428.428h-1.644a1.67 1.67 0 0 1-1.607-1.238m-.069 1.655h4.27a.428.428 0 1 1 0 .857h-4.27a.428.428 0 1 1 0-.857'
      clipRule='evenodd'
    />
    <path
      fill='#9C3900'
      d='M13.823 8.848h1.505c.194.713.84 1.238 1.607 1.238h1.644a.43.43 0 0 0 .428-.428v-.81h1.96a.428.428 0 1 0 0-.856H18.58l2.695-3.768a.428.428 0 0 0-.31-.724l-5.269 2a1.668 1.668 0 0 0-1.445 2.492h-.43a.428.428 0 1 0 0 .856'
    />
    <path fill='#FFE000' d='M19.53 10.503h-4.27a.428.428 0 1 0 0 .857h4.27a.428.428 0 1 0 0-.857' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagAmericanSamoaIcon);
export default ForwardRef;
