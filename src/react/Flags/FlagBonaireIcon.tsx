import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagBonaireIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#3d456e9b32fc37b8350d19f8db5a6578__a)'>
      <path fill='gold' d='M0 2a2 2 0 0 1 2-2h8L0 7z' />
      <path
        fill='#003087'
        d='M23.297.477.954 15.705c.304.187.663.295 1.046.295h20a2 2 0 0 0 2-2V2c0-.61-.273-1.156-.703-1.523'
      />
      <path fill='#fff' d='M23.304.483A2 2 0 0 0 22 0H9.994L0 7v7c0 .717.377 1.345.943 1.698z' />
      <path
        fill='#000'
        fillRule='evenodd'
        d='M7.2 3.905 7 3.5l-.191.405A2.994 2.994 0 0 0 4.017 6.7l-.405.194.405.198A2.995 2.995 0 0 0 6.81 9.884l.199.406.19-.406a3 3 0 0 0 2.795-2.797l.403-.19-.405-.198A2.994 2.994 0 0 0 7.2 3.905M7 9.4a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5'
        clipRule='evenodd'
      />
      <path
        fill='#D50032'
        d='M7.395 6.083 7 5.399l-.395.684h-.943l.472.816-.472.817h.943L7 8.399l.395-.683h.942l-.471-.817.471-.816z'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M2 1h20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m20-1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='3d456e9b32fc37b8350d19f8db5a6578__a'>
        <path fill='#fff' d='M24 0H0v16h24z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(FlagBonaireIcon);
export default ForwardRef;
