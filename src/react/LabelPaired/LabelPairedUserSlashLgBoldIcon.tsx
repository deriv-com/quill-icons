import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserSlashLgBoldIcon = (
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
      <path d='M1.523 5.695 7.5 10.383q.078-2.07 1.484-3.438Q10.391 5.54 12.5 5.5q2.109.04 3.555 1.445Q17.46 8.391 17.5 10.5q-.04 1.758-1.055 3.086-1.015 1.29-2.656 1.758l10.86 8.476q.624.586.156 1.328-.586.626-1.328.157L.352 7.18q-.626-.586-.157-1.328.586-.626 1.328-.157m9.844 7.696a2.7 2.7 0 0 0 1.133.234q1.328-.039 2.227-.898.858-.9.898-2.227-.039-1.328-.898-2.227-.9-.859-2.227-.898-1.328.04-2.227.898-.858.9-.898 2.227 0 1.016.586 1.836zm-1.055 3.984 2.383 1.875h-1.992q-1.953.04-3.32 1.25-1.406 1.21-1.719 3.125h12.578l2.266 1.797q-.195.078-.43.078H4.922q-.508 0-.82-.352-.352-.312-.352-.82.078-2.851 1.914-4.765 1.836-1.954 4.649-2.188' />
    </g>
    <defs>
      <clipPath id='3083390b228a83b36cdcc530b9235ba0__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserSlashLgBoldIcon);
export default ForwardRef;
