async function sleep(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout * 1000);
  });
}

await sleep(1.5)
