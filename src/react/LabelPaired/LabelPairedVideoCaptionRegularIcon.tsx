import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5.75A.755.755 0 0 0 1 6.5v6c0 .422.328.75.75.75h6c.398 0 .75-.328.75-.75v-6a.77.77 0 0 0-.75-.75zm-1.5.75c0-.82.656-1.5 1.5-1.5h6c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5h-6a1.48 1.48 0 0 1-1.5-1.5zm12.164 6.656L10 11.82v-.867l2.766 1.547c.023 0 .046.023.07.023A.16.16 0 0 0 13 12.36V6.664a.16.16 0 0 0-.164-.164c-.024 0-.047.023-.07.023L10 8.07v-.867l2.414-1.336a.96.96 0 0 1 .422-.117.93.93 0 0 1 .914.914v5.695c0 .493-.422.891-.914.891a.9.9 0 0 1-.422-.094' />
    </g>
    <defs>
      <clipPath id='7360578d306dcf8b02826ebbe929ba66__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoCaptionRegularIcon);
export default ForwardRef;
