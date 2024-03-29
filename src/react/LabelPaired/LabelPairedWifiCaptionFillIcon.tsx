import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWifiCaptionFillIcon = (
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
      <path d='M1.266 8.258c-.305.305-.774.281-1.078-.024-.282-.28-.258-.773.023-1.054C2.109 5.375 4.664 4.25 7.5 4.25c2.813 0 5.367 1.125 7.266 2.93.28.28.304.773.023 1.054-.305.305-.773.329-1.078.024A8.95 8.95 0 0 0 7.5 5.75c-2.437 0-4.617.96-6.234 2.508M7.5 9.5c-1.336 0-2.555.516-3.492 1.313a.743.743 0 0 1-1.055-.047.795.795 0 0 1 .07-1.078C4.22 8.656 5.79 8 7.5 8c1.71 0 3.258.656 4.453 1.688.305.28.352.75.07 1.078a.743.743 0 0 1-1.054.046C10.03 10.017 8.813 9.5 7.5 9.5M9 13.25c0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 6 13.25c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29' />
    </g>
    <defs>
      <clipPath id='e655c81ae35f6c5f435e05c1670c6d0b__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWifiCaptionFillIcon);
export default ForwardRef;
