import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopLossXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.219 24.516c-1.078 0-1.969-.188-2.719-.563a5.448 5.448 0 0 1-1.875-1.547l1.406-1.312a5.04 5.04 0 0 0 1.453 1.218c.516.282 1.125.422 1.829.422.796 0 1.406-.187 1.828-.562.422-.375.609-.844.609-1.453 0-.469-.14-.89-.422-1.172-.281-.281-.797-.516-1.547-.656l-1.125-.188c-1.219-.234-2.11-.61-2.719-1.219C6.282 16.922 6 16.125 6 15.141c0-.563.094-1.078.281-1.5.235-.47.516-.844.89-1.125.376-.328.845-.563 1.407-.75a6.932 6.932 0 0 1 1.828-.235c.938 0 1.735.14 2.438.516.703.281 1.312.797 1.781 1.406l-1.406 1.266a4.132 4.132 0 0 0-1.172-1.031c-.469-.235-1.078-.376-1.781-.376-.703 0-1.266.141-1.641.422-.422.282-.61.704-.61 1.266 0 .563.188.938.47 1.219.328.234.843.422 1.546.562l1.125.235c1.219.234 2.156.656 2.719 1.218.61.563.89 1.36.89 2.391 0 .563-.093 1.125-.28 1.594-.235.468-.516.89-.938 1.218-.375.375-.844.61-1.406.797-.563.188-1.22.282-1.922.282m6.984-.235V11.72h2.016V22.5h5.11v1.781z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossXlRegularIcon);
export default ForwardRef;
