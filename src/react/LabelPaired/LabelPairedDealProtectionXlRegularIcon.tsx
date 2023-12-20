import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedDealProtectionXlRegularIcon = (
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
        d='M4.313 11.719h4.453c.797 0 1.5.14 2.156.422.656.234 1.219.656 1.687 1.172.47.515.844 1.171 1.079 1.968.234.797.374 1.688.374 2.719 0 1.078-.14 1.969-.374 2.766-.235.797-.61 1.453-1.079 1.968-.468.516-1.03.891-1.687 1.172a5.362 5.362 0 0 1-2.156.422H4.313zM8.766 22.5c.937 0 1.687-.281 2.25-.89.562-.563.89-1.454.89-2.579v-2.015c0-1.125-.328-2.016-.89-2.578-.563-.61-1.313-.891-2.25-.891H6.328V22.5zm7.828 1.781V11.72h5.39c1.172 0 2.063.375 2.72 1.031.608.703.937 1.64.937 2.766 0 1.172-.328 2.062-.938 2.765-.656.703-1.547 1.032-2.719 1.032H18.61v4.968zm2.015-6.75h3.282c.515 0 .89-.14 1.172-.422.28-.28.421-.656.421-1.172v-.843c0-.516-.14-.89-.422-1.172-.28-.281-.656-.422-1.171-.422h-3.282z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionXlRegularIcon);
export default ForwardRef;
