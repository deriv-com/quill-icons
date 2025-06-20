import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 6.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75m0 18v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75M0 18c0-.375.328-.75.75-.75h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75A.74.74 0 0 1 0 18m18.75-.75h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-4.5A.74.74 0 0 1 18 18c0-.375.328-.75.75-.75m1.734-7.734c.282.328.282.797 0 1.078l-3.187 3.187c-.328.281-.797.281-1.078 0s-.282-.75 0-1.078l3.187-3.187c.282-.282.75-.282 1.078 0M7.734 23.344l-3.187 3.14a.663.663 0 0 1-1.031 0 .663.663 0 0 1 0-1.03l3.14-3.188c.328-.282.797-.282 1.078 0 .282.28.282.75 0 1.078M3.516 9.516a.736.736 0 0 1 1.03 0l3.188 3.187c.282.328.282.797 0 1.078-.28.281-.75.281-1.078 0l-3.14-3.187c-.328-.281-.328-.75 0-1.078m13.78 12.75 3.188 3.187a.736.736 0 0 1 0 1.031c-.328.328-.797.328-1.078 0l-3.187-3.14c-.282-.328-.282-.797 0-1.078s.75-.282 1.078 0' />
    </g>
    <defs>
      <clipPath id='7f268154a439a16e7c114fcb93c5108b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderXlRegularIcon);
export default ForwardRef;
