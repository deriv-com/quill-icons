import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 3.5h3.75v3c0 .422.328.75.75.75h3V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m4.5 0 3 3H6zM3.633 9.383a.54.54 0 0 0-.774-.14.54.54 0 0 0-.14.773l1.078 1.547-1.078 1.57c-.188.234-.117.586.14.773.258.188.61.117.774-.14l.867-1.22.844 1.22c.187.257.515.328.773.14.258-.187.328-.515.14-.773l-1.077-1.57 1.078-1.547a.54.54 0 0 0-.14-.774.54.54 0 0 0-.774.14l-.844 1.22z' />
    </g>
    <defs>
      <clipPath id='4bbcb56bfad4848c20ae8da9c1bbbf9e__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelCaptionFillIcon);
export default ForwardRef;
