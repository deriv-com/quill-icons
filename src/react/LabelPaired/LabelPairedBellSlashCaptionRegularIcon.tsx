import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellSlashCaptionRegularIcon = (
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
      <path d='M8.86 12.5v.023l.96.75H3.281a1.05 1.05 0 0 1-1.054-1.054c0-.258.117-.54.304-.727l.07-.07A3.87 3.87 0 0 0 3.75 8.703V8.47l.727.562a4.78 4.78 0 0 1-1.336 2.93l-.07.047a.4.4 0 0 0-.071.21.27.27 0 0 0 .281.282zM7.124 4.273v-.398c0-.187.164-.375.375-.375.188 0 .375.188.375.375v.398C9.75 4.461 11.25 6.055 11.25 8v.703a3.85 3.85 0 0 0 1.125 2.719l.07.07c0 .024.024.024.047.047l-1.758-1.383a4.4 4.4 0 0 1-.234-1.453V8c0-1.64-1.36-3-3-3a3 3 0 0 0-2.156.914l-.586-.469a3.7 3.7 0 0 1 2.367-1.172m-.352 9.985a.76.76 0 0 0 .727.492.75.75 0 0 0 .703-.492c.07-.188.281-.305.469-.235.21.07.305.282.234.493-.21.586-.773.984-1.406.984a1.5 1.5 0 0 1-1.43-.984.393.393 0 0 1 .235-.493c.187-.07.398.047.468.235M.586 3.594l14.273 11.25c.141.117.188.375.047.515a.35.35 0 0 1-.515.07L.14 4.18c-.164-.117-.211-.374-.07-.515.117-.164.374-.21.515-.07' />
    </g>
    <defs>
      <clipPath id='15f3d98df3a1a15ca9890149ddadc3fc__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSlashCaptionRegularIcon);
export default ForwardRef;
