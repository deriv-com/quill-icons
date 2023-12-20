import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedDealProtectionXlBoldIcon = (
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
        d='M3.844 11.719h4.734c.797 0 1.547.14 2.25.422.703.234 1.266.656 1.735 1.172.468.515.843 1.171 1.124 1.968.282.797.376 1.688.376 2.719 0 1.078-.094 1.969-.376 2.766-.28.797-.656 1.453-1.124 1.968-.47.516-1.032.891-1.735 1.172-.656.282-1.453.422-2.25.422H3.844zM8.578 21.89c.797 0 1.453-.235 1.922-.703.469-.47.703-1.172.703-2.204v-1.922c0-1.03-.234-1.734-.703-2.203-.469-.468-1.125-.703-1.922-.703H6.563v7.735zm7.781 2.39V11.72h5.953c.61 0 1.125.14 1.594.328a3.46 3.46 0 0 1 1.172.797c.328.375.61.797.797 1.312.14.469.234 1.031.234 1.594 0 .61-.047 1.172-.234 1.64a3.442 3.442 0 0 1-.797 1.266c-.328.328-.703.61-1.172.844-.468.188-.984.281-1.593.281h-3.188v4.5zm2.766-6.89h2.86c.421 0 .75-.094.984-.328.234-.188.328-.516.328-.938v-.75c0-.422-.094-.75-.328-.937-.235-.235-.563-.329-.985-.329h-2.859z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionXlBoldIcon);
export default ForwardRef;
