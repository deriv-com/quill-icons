import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m5.227-2.953a.525.525 0 0 1 .351.703l-.867 2.625h1.664V8.563c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563v1.312h.188a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H7.5v.938a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V11H3.938a.55.55 0 0 1-.47-.234c-.093-.141-.14-.328-.07-.493l1.125-3.375c.094-.304.422-.468.704-.351' />
    </g>
    <defs>
      <clipPath id='5222def53f722005ccfff29cf859f05b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourCaptionBoldIcon);
export default ForwardRef;
