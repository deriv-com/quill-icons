import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornSmRegularIcon = (
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
      <path d='M11.375 4.98c0-.218-.246-.3-.383-.164l-.656.684a8.4 8.4 0 0 1-4.211 2.406v4.84a8.2 8.2 0 0 1 4.21 2.406l.657.684c.137.137.383.027.383-.164zM5.25 12.61V8.042c-.164.027-.328.027-.492.055l-.82.027H1.75A.88.88 0 0 0 .875 9v2.625c0 .492.383.875.875.875h2.188l.82.055c.164 0 .328.027.492.054m5.113-8.395c.657-.711 1.887-.246 1.887.765v10.692c0 .984-1.23 1.476-1.887.765l-.656-.683a7.47 7.47 0 0 0-4.457-2.27v2.735c0 .847-.684 1.531-1.531 1.531H3.28a1.53 1.53 0 0 1-1.531-1.531v-2.844c-.984 0-1.75-.766-1.75-1.75V9c0-.957.766-1.75 1.75-1.75h2.16l.793-.027a7.42 7.42 0 0 0 5.004-2.325zm-7.738 9.16v2.844c0 .383.273.656.656.656h.438a.65.65 0 0 0 .656-.656v-2.817l-.465-.027zM13.563 9a.47.47 0 0 1 .437.438v1.75a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-1.75A.45.45 0 0 1 13.563 9' />
    </g>
    <defs>
      <clipPath id='fc8ae23a43030d0f8540ea53a1a37960__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornSmRegularIcon);
export default ForwardRef;
