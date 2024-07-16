import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashLgFillIcon = (
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
      <path d='M1.484 5.734 5.86 9.133C7.617 7.805 9.805 6.75 12.5 6.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.508 1.25-1.563 3.047-3.125 4.61l4.101 3.241c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L.353 7.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m7.227 5.625 3.516 2.774c.156-.352.273-.703.273-1.094 0-.312-.078-.547-.156-.82-.04-.196.078-.469.312-.43 1.602.04 3.008 1.133 3.438 2.774.234.859.156 1.718-.157 2.46l1.485 1.172c.43-.78.703-1.718.703-2.695 0-3.086-2.54-5.625-5.625-5.625a5.6 5.6 0 0 0-3.79 1.484m5.86 9.375L17.42 23a10.2 10.2 0 0 1-4.921 1.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977 15.6 15.6 0 0 1 1.914-3.203l3.672 2.89c-.039.274-.039.548-.039.782 0 3.125 2.5 5.625 5.625 5.625.703 0 1.406-.117 2.07-.39' />
    </g>
    <defs>
      <clipPath id='1edf1b2d36c54a182bdadb2aadb6fd7a__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashLgFillIcon);
export default ForwardRef;
