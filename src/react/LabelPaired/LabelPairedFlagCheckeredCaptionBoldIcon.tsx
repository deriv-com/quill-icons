import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.813 3.5a.57.57 0 0 1 .562.563v.656l1.992-.492a3.84 3.84 0 0 1 2.649.304c1.078.54 2.367.54 3.445 0l.234-.117a.738.738 0 0 1 1.055.656v6.54c0 .328-.21.609-.492.703l-.82.304a4.12 4.12 0 0 1-3.329-.164 4.17 4.17 0 0 0-2.859-.328l-1.875.469v2.344a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V4.063c0-.305.234-.563.563-.563m.562 3.54 1.875-.4V5.423l-1.875.469zm0 1.148v1.101l1.875-.398V7.789zm0 2.25v1.007l1.594-.398.281-.07v-.938zm3 .445a5.5 5.5 0 0 1 2.25.562v-1.172l-1.312-.375c-.305-.093-.633-.117-.938-.093zm3.375.867c.422.047.867-.023 1.29-.187l.585-.211V10.25l-.61.14c-.421.118-.843.141-1.265.118zm1.875-2.648V8l-.61.14c-.421.118-.843.141-1.265.118v1.125c.328.023.68 0 1.008-.07zm0-2.25V5.68a4.8 4.8 0 0 1-1.875.375v1.054c.328.047.68.024 1.008-.046zm-3-.915a5.6 5.6 0 0 1-1.102-.398 3 3 0 0 0-1.148-.305V6.43q.633-.036 1.266.14l.984.282zm0 2.086-1.312-.375a2.6 2.6 0 0 0-.938-.093V8.68q.633-.036 1.266.14l.984.282z' />
    </g>
    <defs>
      <clipPath id='386312b43a43b0b20ff30f0d8d91984d__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredCaptionBoldIcon);
export default ForwardRef;
