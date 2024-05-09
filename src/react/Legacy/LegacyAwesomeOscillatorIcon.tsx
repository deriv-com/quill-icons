import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyAwesomeOscillatorIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M9 6.76V22H6V6.76zM13.5 2v20h-3V2zM5 11.52V22H2V11.52z' />
    <path d='M18 4.86V22h-3V4.86zm4 5.71V22h-3V10.57z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyAwesomeOscillatorIcon);
export default ForwardRef;
