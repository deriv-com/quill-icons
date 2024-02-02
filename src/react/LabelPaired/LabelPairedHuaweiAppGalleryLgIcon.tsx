import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHuaweiAppGalleryLgIcon = (
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
      <path d='m11.484 16.203-.351.899-.04.078h.821l-.039-.078zM17.813 5.5a4.7 4.7 0 0 1 4.687 4.688v10.664c0 2.578-2.11 4.648-4.687 4.648H7.148A4.635 4.635 0 0 1 2.5 20.852V10.188C2.5 7.608 4.57 5.5 7.148 5.5zm-3.399 10-.586 1.875-.586-1.875h-.547l.899 2.734h.469l.585-1.797.586 1.797h.43l.938-2.734h-.547l-.586 1.875-.586-1.875zm-3.125 0-1.172 2.734h.547l.234-.507v-.04h1.211l.235.547h.547l-1.133-2.695V15.5zm8.32 0v2.734h.547V15.5zm-15 0v2.734h.547v-1.093h1.172v1.093h.547V15.5h-.547v1.133H5.156V15.5zm4.727 0v1.563c0 .468-.234.703-.586.703-.39 0-.625-.235-.625-.703v-1.524h-.508v1.524c0 .78.39 1.21 1.094 1.21.742 0 1.133-.43 1.133-1.21V15.5zm7.695 0v2.734h1.953v-.507H17.54v-.665h.977v-.507h-.977v-.547h1.406V15.5zM8.828 8.703c0 1.914 1.602 3.438 3.555 3.438s3.555-1.524 3.555-3.438h-.508c0 1.64-1.367 2.93-3.047 2.93s-3.047-1.29-3.047-2.93z' />
    </g>
    <defs>
      <clipPath id='3ee9f929a36c825e__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiAppGalleryLgIcon);
export default ForwardRef;
