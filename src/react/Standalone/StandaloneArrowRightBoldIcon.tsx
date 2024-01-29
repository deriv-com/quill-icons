import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneArrowRightBoldIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m24.477 17.164-6.875 6.563q-.704.546-1.329 0-.546-.704 0-1.329l5.196-4.96H8.187q-.859-.079-.937-.938.078-.86.938-.937h13.28l-5.155-4.961q-.586-.625-.04-1.329.626-.546 1.329 0l6.875 6.563a.9.9 0 0 1 .273.664q0 .39-.273.664' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightBoldIcon);
export default ForwardRef;
