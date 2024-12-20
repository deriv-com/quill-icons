import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagSintEustatiusIcon = (
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
    <path
      fill='#E31D1C'
      fillRule='evenodd'
      d='m6.002 8.002 1.025.683L9.299 10.2 12.002 12l2.7-1.8 2.453-1.636.847-.564-6-4z'
      clipRule='evenodd'
    />
    <path
      fill='#F9D90F'
      d='m12.002 6.655-.65.342.124-.724-.525-.513.726-.105.325-.658.324.658.727.105-.526.513.124.723z'
    />
    <path
      fill='#008830'
      d='M15.433 7.064c-.147-.092-.388-.132-.662.163-.17.183-.296.075-.421-.032-.076-.065-.152-.13-.238-.13-.228 0-.325 0-.657.377l-1.524 1.736h-1.754s-.295-.224-.464-.144c-.086.04-.375-.19-.682-.434-.296-.234-.608-.483-.773-.517-.34-.073-.71.303-.71.567 0 .089-.001.085-.015.047-.028-.074-.105-.282-.319-.184a.4.4 0 0 0-.187.172L9.299 10.2h5.404l2.452-1.635c-.68-.602-1.63-1.44-1.722-1.5'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M14.772 7.227c.273-.295.514-.255.66-.163.093.06 1.043.898 1.723 1.5L18.002 8l-6-4-6 4.002 1.025.683a.4.4 0 0 1 .187-.172c.214-.098.291.11.319.184.014.038.015.042.015-.047 0-.264.37-.64.71-.567.165.034.477.283.773.517.307.245.596.474.682.434.169-.08.464.144.464.144h1.754l1.524-1.736c.332-.377.429-.377.657-.377.086 0 .162.065.238.13.125.107.25.215.422.032m-5.473 2.972L12.002 12l2.7-1.8zm2.053-3.202.124-.724-.525-.513.726-.105.325-.658.324.658.727.105-.526.513.124.723-.649-.341z'
      clipRule='evenodd'
    />
    <path
      fill='#E31D1C'
      fillRule='evenodd'
      d='M0 2a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 0a1 1 0 0 1 1-1h9.5v2.133L4.952 7.5H1zm21-1a1 1 0 0 1 1 1v5.5h-3.945L12.5 3.13V1zm1 13a1 1 0 0 1-1 1h-9.5v-2.13l6.555-4.37H23zM2 15a1 1 0 0 1-1-1V8.5h3.946l6.554 4.367V15zm4.002-6.998 6-4.002 6 4-.847.564-2.452 1.635L12.002 12l-2.703-1.8-2.272-1.515z'
      clipRule='evenodd'
    />
    <path
      fill='#012A87'
      d='M23 2a1 1 0 0 0-1-1h-9.5v2.13l6.555 4.37H23zM2 1a1 1 0 0 0-1 1v5.5h3.952L11.5 3.133V1zM1 14a1 1 0 0 0 1 1h9.5v-2.133L4.946 8.5H1zM22 15a1 1 0 0 0 1-1V8.5h-3.945L12.5 12.87V15z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagSintEustatiusIcon);
export default ForwardRef;
