import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookMessengerXlIcon = (
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
      <path d='M12 6.375c6.563 0 11.625 4.828 11.625 11.297 0 8.203-7.828 12.797-15 10.828-.422-.094-.469 0-2.906 1.078-.328.094-.657.094-.89-.094-.282-.14-.423-.422-.423-.75-.093-2.156 0-2.343-.375-2.718C1.734 24 .375 21.046.375 17.672.375 11.203 5.438 6.375 12 6.375m6.984 8.719c.328-.516-.28-1.125-.797-.75l-3.656 2.765c-.281.188-.61.188-.844 0l-2.718-2.015c-.422-.281-.89-.422-1.36-.328-.515.093-.937.375-1.171.797l-3.422 5.39c-.328.516.28 1.125.797.75l3.656-2.765c.281-.188.61-.188.844 0l2.718 2.015c.422.281.89.422 1.406.328.47-.093.891-.375 1.126-.797z' />
    </g>
    <defs>
      <clipPath id='6e5a706648c8a7cf9da830b27267a771__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookMessengerXlIcon);
export default ForwardRef;
