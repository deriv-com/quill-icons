import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 11.75v2.5h5.313a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4v2.5c0 .977-.273 1.953-.742 2.852l-.508.898h9.063a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188c-.352 0-.665-.156-.82-.43-.157-.312-.196-.664-.04-.937l1.29-2.305c.312-.625.507-1.289.507-1.953v-2.5h-.937c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h.937v-2.5c0-2.773 2.227-5 4.96-5 .509 0 1.056.117 1.563.273l3.125 1.055c.508.156.782.664.586 1.172-.156.508-.664.742-1.171.586L8.062 8.82a2.9 2.9 0 0 0-.976-.195C5.367 8.625 4 10.031 4 11.75' />
    </g>
    <defs>
      <clipPath id='cc1f3adff88f6fa0ad6f5809480c6c59__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignLgBoldIcon);
export default ForwardRef;
