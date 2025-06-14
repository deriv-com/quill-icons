import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealProtectionXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.844 11.719h4.734q1.196 0 2.25.422c.703.234 1.266.656 1.735 1.172q.702.773 1.124 1.968c.282.797.376 1.688.376 2.719 0 1.078-.094 1.969-.376 2.766q-.421 1.196-1.124 1.968c-.47.516-1.032.891-1.735 1.172-.656.282-1.453.422-2.25.422H3.844zM8.578 21.89c.797 0 1.453-.235 1.922-.703.469-.47.703-1.172.703-2.204v-1.922c0-1.03-.234-1.734-.703-2.203s-1.125-.703-1.922-.703H6.563v7.735zm7.781 2.39V11.72h5.953c.61 0 1.125.14 1.594.328a3.5 3.5 0 0 1 1.172.797c.328.375.61.797.797 1.312.14.469.234 1.031.234 1.594 0 .61-.047 1.172-.234 1.64a3.44 3.44 0 0 1-.797 1.266c-.328.328-.703.61-1.172.844-.468.188-.984.281-1.593.281h-3.188v4.5zm2.766-6.89h2.86c.421 0 .75-.094.984-.328.234-.188.328-.516.328-.938v-.75c0-.422-.094-.75-.328-.937-.235-.235-.563-.329-.985-.329h-2.859z' />
    </g>
    <defs>
      <clipPath id='405c6aae8507a1ed877d7bbf7450a88d__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionXlBoldIcon);
export default ForwardRef;
