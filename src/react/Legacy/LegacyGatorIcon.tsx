import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyGatorIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#85ACB0' d='M2 22v-8.57h3V7.71h3V2h3v3.81h3V22z' />
    <path fill='#FF444F' d='M14 22V8.67h3v4.76h3v2.859l2 .001V22z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyGatorIcon);
export default ForwardRef;
