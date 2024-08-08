import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.5 19a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h11c.25 0 .5.25.5.5 0 .281-.25.5-.5.5zm5.844-3.125a.53.53 0 0 1-.719 0l-4-4a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L5.5 14.312V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v8.813l3.125-3.157a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719z' />
    </g>
    <defs>
      <clipPath id='6d421301acbb2126d6a98e4d046b879d__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineMdRegularIcon);
export default ForwardRef;
