import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHuaweiAppGalleryCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.89 9.922-.21.539-.024.047h.492l-.023-.047zM10.689 3.5A2.82 2.82 0 0 1 13.5 6.313v6.398c0 1.547-1.266 2.789-2.812 2.789H4.289A2.78 2.78 0 0 1 1.5 12.71V6.313C1.5 4.767 2.742 3.5 4.29 3.5zm-2.04 6-.351 1.125L7.945 9.5h-.328l.54 1.64h.28l.352-1.078.352 1.079h.257L9.961 9.5h-.328l-.352 1.125L8.93 9.5zm-1.875 0-.703 1.64h.328l.141-.304v-.024h.727l.14.329h.328l-.68-1.618V9.5zm4.993 0v1.64h.328V9.5zm-9 0v1.64h.328v-.656h.703v.657h.328V9.5h-.328v.68h-.703V9.5zm2.836 0v.938c0 .28-.141.421-.352.421-.234 0-.375-.14-.375-.421v-.915H4.57v.915c0 .468.235.726.657.726.445 0 .68-.258.68-.726V9.5zm4.617 0v1.641h1.172v-.305h-.868v-.399h.586v-.304h-.586v-.328h.844V9.5zM5.297 5.422c0 1.148.96 2.062 2.133 2.062 1.172 0 2.133-.914 2.133-2.062h-.305c0 .984-.82 1.758-1.828 1.758s-1.828-.774-1.828-1.758z' />
    </g>
    <defs>
      <clipPath id='db64d219cdac41b20dd8a6be91da74be__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiAppGalleryCaptionIcon);
export default ForwardRef;
