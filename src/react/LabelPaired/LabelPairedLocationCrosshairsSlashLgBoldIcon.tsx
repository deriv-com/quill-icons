import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.523 5.695 5.704 4.493q1.757-1.759 4.336-2.11v-1.64q.078-.86.937-.938.859.078.938.938v1.64q2.578.352 4.374 2.11 1.759 1.796 2.149 4.374h1.602q.858.079.937.938-.079.859-.937.938H19.96a8 8 0 0 1-1.016 2.93l5.703 4.452q.626.586.157 1.328-.586.626-1.328.157L.352 7.18q-.626-.586-.157-1.328.586-.626 1.328-.157m7.188 5.664 1.523 1.172q.937-.742 2.266-.781 1.602.039 2.656 1.094 1.055 1.054 1.094 2.656 0 .82-.312 1.523l1.523 1.172q.664-1.21.664-2.695-.078-2.383-1.64-3.984-1.602-1.563-3.985-1.641-2.226.038-3.79 1.484m5.664 4.414h-.04q.04-.156.04-.273a2.04 2.04 0 0 0-.547-1.328 2.04 2.04 0 0 0-1.328-.547q-.39 0-.703.117zm1.836 6.25a8.1 8.1 0 0 1-2.773.938v1.602q-.079.858-.938.937-.86-.079-.937-.937V22.96q-2.58-.39-4.376-2.148-1.757-1.758-2.109-4.375h-1.64q-.86-.079-.938-.938.078-.86.938-.937h1.64q.039-.587.234-1.133l1.602 1.289q-.039.39-.039.781.078 2.383 1.64 3.984 1.602 1.602 3.985 1.641 1.095 0 2.07-.39z' />
    </g>
    <defs>
      <clipPath id='9a035bcab72a96c04d4b3441b664ecca__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashLgBoldIcon);
export default ForwardRef;
