import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassPlusSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.375 9.438c0 1.257-.41 2.433-1.094 3.363l3.446 3.472a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-3.474-3.472c-.93.711-2.105 1.094-3.335 1.094A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688m-6.344 2.406c0 .383.274.656.657.656a.65.65 0 0 0 .656-.656v-1.75h1.75a.65.65 0 0 0 .656-.656c0-.356-.3-.657-.656-.657h-1.75v-1.75c0-.355-.301-.656-.657-.656-.382 0-.656.3-.656.656v1.75h-1.75c-.383 0-.656.301-.656.656 0 .383.273.657.656.657h1.75z' />
    </g>
    <defs>
      <clipPath id='06de1586967313362f2bf0927adb1f2f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassPlusSmFillIcon);
export default ForwardRef;
