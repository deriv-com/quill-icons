import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 5.914a.58.58 0 0 1 .586.586v2.18a.65.65 0 0 1 .469-.188c.375 0 .68.281.703.656a.65.65 0 0 1 .469-.187c.375 0 .68.281.703.656a.65.65 0 0 1 .468-.187c.375 0 .704.328.704.703v1.406a1.88 1.88 0 0 1-1.875 1.875H7.992c-.539 0-1.078-.187-1.5-.539l-.07-.07a1.83 1.83 0 0 1-.68-1.453v-.54a.91.91 0 0 1 .352-.726l.281-.234c.023-.024.047-.047.094-.047v.797c0 .14.093.234.234.234a.235.235 0 0 0 .234-.234V6.5c0-.328.235-.586.586-.586zm3.89 2.32 1.266-1.265c.14-.14.14-.352 0-.469L11.32 5.14a.39.39 0 0 0-.492 0 .39.39 0 0 0 0 .493l.774.75H9.328c-.187 0-.328.164-.328.351 0 .188.14.329.328.329h2.274l-.68.68a.34.34 0 0 0 0 .491c.14.118.351.118.469 0m-7.804 0L2.344 6.97c-.14-.14-.14-.352 0-.469L3.68 5.14c.14-.117.351-.117.468 0a.34.34 0 0 1 0 .493l-.75.75h2.274c.187 0 .328.164.328.351a.32.32 0 0 1-.328.329H3.398l.68.68a.39.39 0 0 1 0 .491.39.39 0 0 1-.492 0' />
    </g>
    <defs>
      <clipPath id='99ca8167fb61248e6ff26848adb5ac20__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightCaptionFillIcon);
export default ForwardRef;
