import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivProductBrandLightDerivGoWordmarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 173 35'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='m20.74 1.194-1.773 10.051h-6.152c-5.74 0-11.21 4.65-12.224 10.39l-.43 2.443c-1.009 5.74 2.82 10.39 8.56 10.39h5.131c4.183 0 8.169-3.387 8.904-7.57L27.482.11zM16.373 25.95c-.226 1.292-1.39 2.344-2.682 2.344h-3.117c-2.58 0-4.306-2.094-3.853-4.678l.268-1.524c.458-2.58 2.92-4.678 5.5-4.678h5.39z'
      clipRule='evenodd'
    />
    <path
      fill='#FF444F'
      d='M68.119 34.47h6.385l4.037-22.903h-6.385zM68.331 14.553l.001-.005.48-2.717c-6.553-1.688-11.656.059-13.735.92l-3.832 21.724h6.39l3.11-17.644c.959-.19 4.08-.49 7.105.45z'
    />
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='M42.914 11.243h-4.966c-4.843 0-9.46 3.924-10.314 8.767l-1.005 5.692c-.853 4.844 2.377 8.768 7.22 8.768h10.575l1.084-6.155h-9.937c-1.613 0-2.693-1.306-2.405-2.924l.033-.193h16.02l.916-5.188c.853-4.843-2.377-8.767-7.22-8.767m.811 8.277-.037.33H34.16l.052-.293c.288-1.613 1.76-3.032 3.377-3.032h3.72c1.6 0 2.68 1.396 2.415 2.995'
      clipRule='evenodd'
    />
    <path
      fill='#FF444F'
      d='M89.64 26.673c2.899-5.216 6.095-12.06 7.427-15.106h6.395c-2.177 5.788-7.165 15.633-11.998 22.902h-6.39c-2.218-6.919-3.65-16.558-3.924-22.902h6.39c.116 2.07 1.042 9.744 2.1 15.106'
    />
    <path
      fill='#414652'
      d='M141.114 17.376q0-4.272 1.248-7.536 1.296-3.264 3.456-5.424a14.4 14.4 0 0 1 5.088-3.312Q153.834 0 157.098 0q3.216 0 6.048 1.104 2.88 1.104 5.04 3.312 2.16 2.16 3.408 5.424 1.296 3.264 1.296 7.536t-1.296 7.536q-1.248 3.264-3.408 5.472a14.3 14.3 0 0 1-5.04 3.264q-2.832 1.104-6.048 1.104-3.264 0-6.192-1.104a14.75 14.75 0 0 1-5.088-3.264q-2.16-2.208-3.456-5.472-1.248-3.264-1.248-7.536m4.896 0q0 3.024.768 5.52.768 2.448 2.16 4.176a10.1 10.1 0 0 0 3.456 2.688q2.064.912 4.608.912t4.56-.912a9.64 9.64 0 0 0 3.408-2.688q1.44-1.728 2.208-4.176.768-2.496.768-5.52t-.768-5.472q-.768-2.496-2.208-4.224a9.2 9.2 0 0 0-3.408-2.64q-2.016-.96-4.56-.96t-4.608.96a9.6 9.6 0 0 0-3.456 2.64q-1.392 1.728-2.16 4.224-.768 2.448-.768 5.472M132.432 17.664h4.656v15.552q-.576.192-1.68.432-1.056.24-2.496.48-1.392.24-3.072.384-1.68.192-3.408.192-3.504 0-6.384-1.152a13.6 13.6 0 0 1-4.944-3.36q-2.064-2.208-3.216-5.424-1.104-3.216-1.104-7.392t1.248-7.392q1.296-3.264 3.456-5.472a14.5 14.5 0 0 1 5.04-3.36Q123.456 0 126.768 0q2.256 0 3.984.288 1.776.288 3.024.672t2.016.768q.816.384 1.104.576l-1.488 3.888q-1.392-.912-3.696-1.488a18 18 0 0 0-4.704-.624q-2.544 0-4.656.912a9.9 9.9 0 0 0-3.552 2.64q-1.44 1.728-2.256 4.224-.816 2.448-.816 5.52 0 2.976.672 5.424.72 2.448 2.112 4.224a10 10 0 0 0 3.504 2.688q2.112.96 4.944.96 2.016 0 3.408-.192 1.44-.24 2.064-.432z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivProductBrandLightDerivGoWordmarkIcon);
export default ForwardRef;