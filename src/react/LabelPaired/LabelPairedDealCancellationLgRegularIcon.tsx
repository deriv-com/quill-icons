import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.516 10.266h3.71c.665 0 1.25.117 1.797.351.547.195 1.016.547 1.407.977.39.43.664.976.898 1.64.195.664.313 1.407.313 2.266a8 8 0 0 1-.313 2.305c-.234.664-.508 1.21-.898 1.64s-.86.742-1.407.977a4.5 4.5 0 0 1-1.796.351H3.516zm3.71 8.984c.782 0 1.407-.234 1.876-.742.468-.469.703-1.211.703-2.149v-1.68c0-.937-.235-1.679-.703-2.148-.47-.508-1.094-.742-1.875-.742H5.195v7.461zm10.43 1.68c-1.367 0-2.422-.47-3.203-1.367-.781-.938-1.172-2.266-1.172-4.063 0-.86.078-1.64.313-2.305.195-.664.469-1.25.86-1.68.39-.468.82-.82 1.366-1.054a4.7 4.7 0 0 1 1.836-.352c.938 0 1.68.196 2.305.586s1.094 1.016 1.445 1.797l-1.445.781a2.4 2.4 0 0 0-.82-1.21c-.391-.274-.86-.43-1.485-.43-.781 0-1.445.273-1.875.82-.469.547-.703 1.29-.703 2.266v1.601c0 .977.235 1.72.703 2.266.43.547 1.094.82 1.875.82.625 0 1.172-.156 1.563-.468.39-.313.664-.743.86-1.25l1.366.82c-.351.742-.82 1.367-1.445 1.797-.664.43-1.406.625-2.344.625' />
    </g>
    <defs>
      <clipPath id='321fde9f295853cff651769e3f0dcb18__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationLgRegularIcon);
export default ForwardRef;
