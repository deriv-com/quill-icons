import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighCaptionRegularIcon = (
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
      <path d='M3.54 7.906A.34.34 0 0 1 3.304 8H1.312a.555.555 0 0 0-.562.563v1.874c0 .329.234.563.563.563h1.992c.07 0 .164.047.234.094l3.211 2.86V5.07zM6.796 4.25a.72.72 0 0 1 .703.703v9.117c0 .375-.328.68-.703.68-.188 0-.352-.047-.469-.164l.258-.281-.258.28-3.187-2.835H1.313A1.31 1.31 0 0 1 0 10.438V8.562C0 7.86.586 7.25 1.313 7.25H3.14l3.187-2.812a.65.65 0 0 1 .469-.188m2.789 3.469A2.24 2.24 0 0 1 10.5 9.5c0 .75-.375 1.406-.914 1.805a.35.35 0 0 1-.516-.07.35.35 0 0 1 .07-.516A1.52 1.52 0 0 0 9.75 9.5a1.51 1.51 0 0 0-.61-1.195.35.35 0 0 1-.07-.516.35.35 0 0 1 .516-.07m.984-1.64a.426.426 0 0 1 .54-.048c.984.844 1.64 2.086 1.64 3.469a4.52 4.52 0 0 1-1.64 3.469.377.377 0 0 1-.54-.047.394.394 0 0 1 .047-.516A3.73 3.73 0 0 0 12 9.5c0-1.148-.54-2.203-1.383-2.883-.164-.14-.164-.375-.047-.539m2.04-1.712C14.062 5.61 15 7.437 15 9.5a6.78 6.78 0 0 1-2.39 5.156.377.377 0 0 1-.54-.047c-.14-.164-.117-.398.047-.515a6.01 6.01 0 0 0 2.11-4.594c0-1.828-.82-3.469-2.11-4.57-.164-.14-.187-.375-.047-.516a.377.377 0 0 1 .54-.047' />
    </g>
    <defs>
      <clipPath id='f4bd9b58389bd93b71be6b8501c1a5c4__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighCaptionRegularIcon);
export default ForwardRef;
